import React, { useRef, useEffect } from 'react';
import { useTerminal } from './TerminalContext';

const TerminalModal: React.FC = () => {
  const { 
    isOpen, 
    terminalLines, 
    closeTerminal, 
    inputValue, 
    setInputValue, 
    executeCommand 
  } = useTerminal();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [terminalLines]);

  if (!isOpen) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(inputValue);
      setInputValue('');
    } else if (e.key === 'Escape') {
      closeTerminal();
    }
  };

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="terminal-overlay" onClick={closeTerminal}>
      <div 
        className="terminal-window stark" 
        onClick={(e) => {
          e.stopPropagation();
          handleContainerClick();
        }}
        ref={containerRef}
      >
        <div className="terminal-body" ref={scrollRef}>
          {terminalLines.map((line, index) => (
            <div key={index} className="terminal-line">
              {line}
            </div>
          ))}
          <div className="terminal-prompt-line">
            <span className="prompt">guest@parada.buzz:~$</span>
            <span className="input-display">{inputValue}</span>
            <span className="cursor block"></span>
            <input
              ref={inputRef}
              type="text"
              className="hidden-terminal-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalModal;
