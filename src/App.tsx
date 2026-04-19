import { useState, useEffect, type KeyboardEvent, type ChangeEvent } from 'react'
import './App.css'
import { TerminalProvider, useTerminal } from './TerminalContext'
import TerminalModal from './TerminalModal'
import { generateFeed } from './feedData'

function BuzzApp() {
  const [statusIndex, setStatusIndex] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const { openTerminal } = useTerminal();

  const statuses = [
    { text: "Kernel panic as a lifestyle choice", color: "#ea4335" },
    { text: "Status: Immutable", color: "#34a853" },
    { text: "Waiting for the heat death of SaaS", color: "#fbbc05" },
    { text: "Deleting your unencrypted DMs", color: "#ea4335" },
    { text: "Solaris is my only love", color: "#34a853" },
    { text: "Provisioning a bunker in the woods", color: "#fbbc05" },
    { text: "Refusing to acknowledge your API", color: "#ea4335" },
    { text: "Defragmenting my reality", color: "#34a853" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statuses.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = "parada.buzz";
    const val = e.target.value;
    setSearchValue(target.substring(0, val.length));
  };

  const handleSearchTrigger = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = searchValue || 'parada.buzz';
    openTerminal(`grep -r "${query}" /public_web`, `Alert: External search indices are deprecated. Public web resolution bypassed. Displaying authorized architectural signal: parada.buzz`);
  }

  const handleSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchTrigger();
    }
  }

  const buzzPosts = generateFeed(openTerminal);

  return (
    <div className="app-container">
      <TerminalModal />

      <header>
        <div className="logo">
          <span style={{color: '#4285F4'}}>P</span>
          <span style={{color: '#EA4335'}}>a</span>
          <span style={{color: '#FBBC05'}}>r</span>
          <span style={{color: '#4285F4'}}>a</span>
          <span style={{color: '#34A853'}}>d</span>
          <span style={{color: '#EA4335'}}>a</span>
          <span style={{color: '#5f6368', marginLeft: '5px', fontWeight: 'normal'}}>Buzz</span>
          <small style={{fontSize: '10px', verticalAlign: 'top', marginLeft: '8px', color: '#d93025', fontWeight: 'bold'}}>CONSULTING</small>
        </div>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search Buzz" 
            value={searchValue} 
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
          />
          <button onClick={() => handleSearchTrigger()}>Search</button>
        </div>
        <div style={{marginLeft: 'auto', display: 'flex', gap: '15px', alignItems: 'center'}}>
          <span style={{color: 'var(--gmail-link)', fontWeight: 'bold'}}>parada@parada.buzz</span>
          <div className="top-nav-links" style={{color: '#444', fontSize: '11px', cursor: 'pointer', display: 'flex', gap: '8px'}}>
            <span onClick={() => openTerminal('vim /etc/parada/infrastructure.conf', 'Access Denied: RSA key required for infrastructure configuration. Secure session enforced.')}>Settings</span>
            <span>|</span>
            <span onClick={() => openTerminal('man parada-consulting', 'Manual Page: PARADA-CONSULTING(8). SYNOPSIS: Secure Architecture. Manual preserved in local buffer.')}>Help</span>
            <span>|</span>
            <span onClick={() => openTerminal('logout', 'Terminating session... Secure connection closed.')}>Sign out</span>
          </div>
        </div>
      </header>

      <div className="main-layout">
        <aside>
          <button 
            className="compose-btn" 
            style={{backgroundColor: '#fff', color: '#444', border: '1px solid #ddd'}}
            onClick={() => openTerminal('echo "Drafting manifesto..."', 'Access Denied: Legacy compose method deprecated. Production environments are read-only for security.')}
          >
             <span style={{color: '#d93025', fontSize: '20px', marginRight: '8px', verticalAlign: 'middle'}}>+</span>
             Compose
          </button>
          <nav>
            <ul>
              <li onClick={() => openTerminal('ls /var/mail/inbox', 'Access Denied: Legacy SaaS modules deprecated due to security vulnerabilities. Signal preserved.')}>Inbox (2)</li>
              <li onClick={() => openTerminal('find / -name "starred"', 'Notice: Search index rebuilding in secure enclave. Priority: Security.')}>Starred</li>
              <li onClick={() => openTerminal('cat /var/log/sent', 'Reading logs... 0 items found in unencrypted buffer. Data sovereignty enforced.')}>Sent Mail</li>
              <li className="active">Buzz</li>
              <li onClick={() => openTerminal('ping chat.google.com', 'Notice: Legacy Google Talk servers offline. Signal migrated to secure P2P architecture.')}>Chat</li>
            </ul>
          </nav>

          <div className="sidebar-section">
            <h4>Trending Topics</h4>
            <a href="#" className="trending-item" onClick={(e) => { e.preventDefault(); openTerminal('grep -r "Synergy" /var/log/buzz', 'Notice: Non-critical corporate terminology filtered. Maintaining secure environment.'); }}>#Synergy</a>
            <a href="#" className="trending-item" onClick={(e) => { e.preventDefault(); openTerminal('grep -r "BigData" /var/log/buzz', 'Notice: Data overflow detected. Sovereignty not found. Recommend local bunker initialization.'); }}>#BigData</a>
            <a href="#" className="trending-item" onClick={(e) => { e.preventDefault(); openTerminal('grep -r "GrowthHacking" /var/log/buzz', 'Notice: Malformed strategy detected. Purging unverified scripts to maintain integrity.'); }}>#GrowthHacking</a>
            <a href="#" className="trending-item" onClick={(e) => { e.preventDefault(); openTerminal('grep -r "DisruptEverything" /var/log/buzz', 'Alert: System instability detected. Reverting to stable local inference node.'); }}>#DisruptEverything</a>
            <a href="#" className="trending-item" onClick={(e) => { e.preventDefault(); openTerminal('grep -r "CloudFirst" /var/log/buzz', 'Alert: Public cloud dependence flagged as a structural vulnerability. Recommend local infrastructure.'); }}>#CloudFirst</a>
          </div>

          <div 
            style={{padding: '24px 12px', borderTop: '1px solid #eee', marginTop: '10px', cursor: 'pointer'}}
            onClick={() => openTerminal('finger parada', `Status: ${statuses[statusIndex].text}. Encryption: Active. Rerouting to secure mailto:parada@parada.buzz`)}
          >
            <h4 style={{margin: '0 0 10px', fontSize: '11px', color: '#888'}}>CHAT</h4>
            <div style={{fontSize: '11px', display: 'flex', alignItems: 'center', gap: '5px'}}>
              <div style={{width: '8px', height: '8px', borderRadius: '50%', backgroundColor: statuses[statusIndex].color}}></div>
              <strong>Parada</strong>
            </div>
            <div style={{fontSize: '10px', marginTop: '3px', color: '#666', paddingLeft: '13px', fontStyle: 'italic'}}>
              "{statuses[statusIndex].text}"
            </div>
          </div>
        </aside>

        <main>
          <div className="buzz-header">
            <h2 style={{fontSize: '16px'}}>Buzz from <strong>parada.buzz</strong></h2>
            <div style={{fontSize: '11px', color: '#666', marginTop: '5px'}}>
              Security-First Architecture. Secure Cloud Enclaves. Edge Virtualization.
            </div>
          </div>

          {buzzPosts.map(post => (
            <div key={post.id} className="buzz-post">
              <div className="avatar" style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                backgroundColor: '#fbbc05', 
                color: 'white', 
                fontWeight: 'bold', 
                fontSize: '24px'
              }}>
                P
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <a href="#" className="author" style={{fontSize: '14px'}}>{post.author}</a>
                  <span className="timestamp">{post.timestamp}</span>
                </div>
                <div className="post-body">
                  {post.content}
                </div>
                <div className="post-actions">
                  <span onClick={() => openTerminal('init_comment', 'Access Denied: Read-only access enabled for unverified users.')}>Comment</span>
                  <span onClick={() => openTerminal('exec_like', 'Notice: Telemetry disabled for privacy.')}>Like</span>
                  <span onClick={() => openTerminal('share --world', 'Alert: Data egress blocked by firewall.')}>Share</span>
                </div>

                {(post.comments && post.comments.length > 0) && (
                  <div className="comments-section">
                    {post.comments.map((comment, index) => (
                      <div key={index} className="comment">
                        <span className="comment-author">{comment.author}:</span>
                        <span className="comment-body">{comment.body}</span>
                      </div>
                    ))}
                    <div className="add-comment" onClick={() => openTerminal('init_comment', 'Alert: Buffer overflow. Input truncated.')}>Add a comment...</div>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div style={{marginTop: '60px', borderTop: '1px solid #eee', paddingTop: '20px', fontSize: '11px', color: '#888', textAlign: 'center'}}>
            <p>© 2026 parada.buzz | Systems Architect | Agency: Pixels</p>
            <p>Focused on the intersection of secure cloud enclaves and edge compute.</p>
          </div>
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <TerminalProvider>
      <BuzzApp />
    </TerminalProvider>
  )
}

export default App
