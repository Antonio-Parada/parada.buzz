import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

interface TerminalContextType {
  isOpen: boolean;
  terminalLines: string[];
  inputValue: string;
  setInputValue: (val: string) => void;
  openTerminal: (command: string, response: string) => void;
  executeCommand: (cmd: string) => void;
  closeTerminal: () => void;
  clearHistory: () => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export const TerminalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHistory = useCallback(() => {
    setTerminalLines([]);
  }, []);

  const executeCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const promptLine = `guest@parada.buzz:~$ ${cmd}`;
    let responseLines: string[] = [];

    switch (trimmedCmd) {
      case 'help':
        responseLines = ['Authenticated commands: [whoami, stack, services, about, picos, legal, contact, clear]'];
        break;
      case 'whoami':
        responseLines = ['Status: Unverified connection. Architecture: Decentralized. Identity: Architect. Agency: Pixels.'];
        break;
      case 'stack':
        responseLines = ['Infrastructure: Solaris, Oracle, Java, ZFS, Linux. Status: Stable.'];
        break;
      case 'services':
        responseLines = ['-> Enterprise Virtualization / Custom OS / Data Management / SSH Terminal Services.'];
        break;
      case 'about':
        responseLines = ['-> Systems Architect. Focused on Solaris, Custom OS, and Secure SSH Terminal Services.'];
        break;
      case 'picos':
        responseLines = ['Proxmox Integrated Cloud-Based Operating Shell. My core virtualization architecture.'];
        break;
      case 'legal':
        responseLines = ['Law Office Study Program initialized. Integrating legal sovereignty into the technical stack.'];
        break;
      case 'contact':
        responseLines = ['Notice: Initializing secure mailto:parada@parada.buzz...'];
        window.location.href = 'mailto:parada@parada.buzz';
        break;
      case 'clear':
        clearHistory();
        return;
      case '':
        responseLines = [];
        break;
      default:
        responseLines = [`bash: ${trimmedCmd}: command not found. Consult 'help' for valid directives.`];
    }

    setTerminalLines(prev => [...prev, promptLine, ...responseLines]);
  }, [clearHistory]);

  const typeResponse = useCallback((command: string, response: string) => {
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    const promptLine = `> ${command}`;
    setTerminalLines(prev => [...prev, promptLine]);
    
    let i = 0;
    const fullResponse = response;
    
    const typeNextChar = () => {
      if (i <= fullResponse.length) {
        setTerminalLines(prev => {
          const newLines = [...prev];
          const lastIdx = newLines.length - 1;
          if (newLines[lastIdx] === promptLine) {
            newLines.push(fullResponse.substring(0, i));
          } else {
            newLines[lastIdx] = fullResponse.substring(0, i);
          }
          return newLines;
        });
        i++;
        typingTimeoutRef.current = setTimeout(typeNextChar, 15);
      }
    };

    typingTimeoutRef.current = setTimeout(typeNextChar, 300);
  }, []);

  const openTerminal = useCallback((command: string, response: string) => {
    setIsOpen(true);
    typeResponse(command, response);
  }, [typeResponse]);

  const closeTerminal = useCallback(() => {
    setIsOpen(false);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
  }, []);

  return (
    <TerminalContext.Provider value={{ 
      isOpen, 
      terminalLines, 
      inputValue, 
      setInputValue, 
      openTerminal, 
      executeCommand, 
      closeTerminal,
      clearHistory
    }}>
      {children}
    </TerminalContext.Provider>
  );
};

export const useTerminal = () => {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }
  return context;
};
