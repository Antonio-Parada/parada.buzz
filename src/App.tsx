import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [statusIndex, setStatusIndex] = useState(0);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalText, setTerminalText] = useState('');

  const statuses = [
    { text: "Syncing with my executive coach", color: "#34a853" },
    { text: "Deep Work (Do Not Ping)", color: "#ea4335" },
    { text: "Out of Office: Ayahuasca retreat", color: "#fbbc05" },
    { text: "Rejecting your calendar invite", color: "#d93025" },
    { text: "Fasting until Series B", color: "#fbbc05" },
    { text: "In a highly aligned sensory-deprivation tank", color: "#34a853" },
    { text: "Currently synergizing offline", color: "#ea4335" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statuses.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openTerminal = (action: string) => {
    setTerminalText(`$ executing ${action}... auth_token validated. Ready for input.`);
    setIsTerminalOpen(true);
  }

  const buzzPosts = [
    {
      id: 1,
      author: 'Parada',
      timestamp: 'Just now',
      content: (
        <div>
          <blockquote>
            "@growth_hacker: 'Just added 5 more webhooks to our Slack/Zapier/Airtable/Notion/Discord bridge! 🚀 #Growth'"
          </blockquote>
          This is exactly why your infrastructure is screaming. One API change and your entire 'growth engine' is a graveyard. I build the bunker, not the playground. Modular, isolated, bare-metal.
        </div>
      ),
      comments: [
        { author: 'Infrastructure', body: 'The antidote to SaaS sprawl.' }
      ]
    },
    {
      id: 2,
      author: 'Parada',
      timestamp: '3 hours ago',
      content: (
        <div>
          <blockquote>
            "VP_Strategy: 'We need to move fast and break things. Everything to the public cloud by Q3! #Disruption'"
          </blockquote>
          Moving fast is how you end up with a $50k AWS bill and zero data sovereignty. True disruption is distribution. True speed is local inference. I'm retreating to the woods to build systems that actually last.
        </div>
      ),
      comments: [
        { author: 'Architect', body: 'Quiet efficiency > Loud disruption.' }
      ]
    },
    {
      id: 3,
      author: 'Parada',
      timestamp: 'Yesterday',
      content: (
        <div>
          <blockquote>
            "@SaaS_Addict: 'Just subscribed to 12 new AI-powered productivity tools! My life is so optimized!'"
          </blockquote>
          You aren't optimized; you're fragmented. Every new tool is a new attack vector and a new distraction. I deploy local models on secure, private hardware. Privacy is the ultimate luxury.
        </div>
      ),
      comments: []
    },
    {
      id: 4,
      author: 'Parada',
      timestamp: '2 days ago',
      content: 'Taming the Modern Buzz. In the age of AI automation, Slack fatigue, and fragile APIs, infrastructure matters. I build secure, modular systems that turn corporate noise into quiet, automated efficiency.',
      comments: []
    },
    {
      id: 5,
      author: 'Parada',
      timestamp: 'Now',
      content: (
        <div style={{background: '#000', color: '#0f0', padding: '15px', fontFamily: 'monospace', borderRadius: '4px'}}>
          <div>$ ssh consulting@parada.buzz</div>
          <div style={{color: '#888'}}># Establishing secure connection...</div>
          <div style={{marginTop: '10px'}}>Ready to tame your infrastructure?</div>
          <div style={{marginTop: '10px'}}>
            <a href="mailto:parada@parada.buzz" style={{color: '#0f0', textDecoration: 'underline'}}>&gt; Initialize_Contact()</a>
          </div>
        </div>
      ),
      comments: []
    }
  ];

  return (
    <div className="app-container">
      {isTerminalOpen && (
        <div className="terminal-overlay" onClick={() => setIsTerminalOpen(false)}>
          <div className="terminal-window" onClick={(e) => e.stopPropagation()}>
            <div className="terminal-header">
              <div className="terminal-dot" style={{background: '#ff5f56'}}></div>
              <div className="terminal-dot" style={{background: '#ffbd2e'}}></div>
              <div className="terminal-dot" style={{background: '#27c93f'}}></div>
              <span style={{color: '#888', fontSize: '10px', marginLeft: '10px'}}>parada@buzz-terminal: ~</span>
            </div>
            <div className="terminal-body">
              <div>{terminalText}</div>
              <div style={{marginTop: '10px', display: 'flex'}}>
                <span style={{marginRight: '8px'}}>&gt; </span>
                <input autoFocus className="terminal-input" placeholder="Type command..." />
              </div>
            </div>
          </div>
        </div>
      )}

      <header>
        <div className="logo">
          <span style={{color: '#4285f4'}}>G</span>
          <span style={{color: '#ea4335'}}>o</span>
          <span style={{color: '#fbbc05'}}>o</span>
          <span style={{color: '#4285f4'}}>g</span>
          <span style={{color: '#34a853'}}>l</span>
          <span style={{color: '#ea4335'}}>e</span>
          <span style={{color: '#5f6368', marginLeft: '5px', fontWeight: 'normal'}}>Buzz</span>
          <small style={{fontSize: '10px', verticalAlign: 'top', marginLeft: '8px', color: '#d93025', fontWeight: 'bold'}}>CONSULTING</small>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search Buzz" defaultValue="parada.buzz" />
          <button>Search</button>
        </div>
        <div style={{marginLeft: 'auto', display: 'flex', gap: '15px', alignItems: 'center'}}>
          <span style={{color: 'var(--gmail-link)', fontWeight: 'bold'}}>parada@parada.buzz</span>
          <span style={{color: '#444', fontSize: '11px'}}>Settings | Help | Sign out</span>
        </div>
      </header>

      <div className="main-layout">
        <aside>
          <button className="compose-btn" style={{backgroundColor: '#fff', color: '#444', border: '1px solid #ddd'}}>
             <span style={{color: '#d93025', fontSize: '20px', marginRight: '8px', verticalAlign: 'middle'}}>+</span>
             Compose
          </button>
          <nav>
            <ul>
              <li>Inbox (2)</li>
              <li>Starred</li>
              <li>Sent Mail</li>
              <li className="active">Buzz</li>
              <li>Chat</li>
            </ul>
          </nav>

          <div className="sidebar-section">
            <h4>Trending Topics</h4>
            <a href="#" className="trending-item">#Synergy</a>
            <a href="#" className="trending-item">#BigData</a>
            <a href="#" className="trending-item">#GrowthHacking</a>
            <a href="#" className="trending-item">#DisruptEverything</a>
            <a href="#" className="trending-item">#CloudFirst</a>
          </div>

          <div style={{padding: '24px 12px', borderTop: '1px solid #eee', marginTop: '10px'}}>
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
              Taming modern SaaS sprawl and automated chaos.
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
                  <span onClick={() => openTerminal('init_comment')}>Comment</span>
                  <span onClick={() => openTerminal('exec_like')}>Like</span>
                  <span>Share</span>
                </div>

                {(post.comments && post.comments.length > 0) && (
                  <div className="comments-section">
                    {post.comments.map((comment, index) => (
                      <div key={index} className="comment">
                        <span className="comment-author">{comment.author}:</span>
                        <span className="comment-body">{comment.body}</span>
                      </div>
                    ))}
                    <div className="add-comment" onClick={() => openTerminal('init_comment')}>Add a comment...</div>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div style={{marginTop: '60px', borderTop: '1px solid #eee', paddingTop: '20px', fontSize: '11px', color: '#888', textAlign: 'center'}}>
            <p>© 2026 parada.buzz | Infrastructure Architect</p>
            <p>Dedicated to the quiet efficiency of secure automation.</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
