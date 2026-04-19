export const generateFeed = (openTerminal: (cmd: string, res: string) => void) => {
  return [
    {
      id: 'cta',
      author: 'Parada',
      timestamp: 'Active Session',
      content: (
        <div style={{background: '#000', color: '#00ff00', padding: '15px', fontFamily: 'monospace', border: '1px solid #00ff00'}}>
          <div>$ ssh services@parada.buzz</div>
          <div style={{color: '#888'}}># Establishing secure consultation tunnel...</div>
          <div style={{marginTop: '10px'}}>Available modules: Virtualization, Custom_OS, Backups, SSH_Terminal.</div>
          <div style={{marginTop: '10px'}}>
            <span 
              onClick={() => openTerminal('contact', 'Notice: Initializing secure mailto:parada@parada.buzz...')} 
              style={{color: '#00ff00', textDecoration: 'underline', cursor: 'pointer'}}
            >
              &gt; Initialize_Consult()
            </span>
          </div>
        </div>
      ),
      comments: []
    },
    {
      id: 'p26_breaking',
      author: 'Parada',
      timestamp: 'April 2, 2026',
      content: (
        <div style={{borderLeft: '3px solid #4285f4', paddingLeft: '15px'}}>
          <p>The news of my friend's father dying today finally shattered the last remaining notion that social media is anything other than a parasite. While the 'feed' begs for engagement, real life is dealing in the currency of irreversible loss.</p>
          <p style={{marginTop: '10px'}}>I’ve picked up the piano to try and unscramble the mathematical wreckage Meta’s algorithms left in my head. There is a specific kind of trauma in staring into monster codebases for years while your own reality is a landslide of grief. I’m done with the labels. I’m returning to the mat—martial arts is the only way to physically defend against the toxic masculinity that claims the lives of my friends and tries to eat my sympathy for myself. Power to the people. Power to the quiet.</p>
        </div>
      ),
      comments: [
        { author: 'Signal', body: 'The quiet returns.' }
      ]
    },
    {
      id: 'p26_freetea',
      author: 'Parada',
      timestamp: 'Early 2026',
      content: (
        <div>
          Launch of <strong>freetea.net</strong>. Decentralized code management is the only way to escape digital feudalism. Host your own history. Pixels is now architecting for complete historical autonomy.
        </div>
      ),
      comments: []
    },
    {
      id: 'p26_catalyst',
      author: 'Parada',
      timestamp: 'February 2026',
      content: (
        <div style={{borderLeft: '3px solid #ea4335', paddingLeft: '15px'}}>
          <p>He was 23. A victim of the hyper-optimized machine. The algorithms partitioned his reality into uncontrasted bins—echo chambers so tight they became a vacuum.</p>
          <p style={{marginTop: '10px'}}>Watching the cloud consume his agency made me realize: I don't build these enclaves for the tech anymore. I build them for the humans who need to breathe outside the machine. Freedom of expression requires a floor that the cloud has dissolved.</p>
        </div>
      ),
      comments: []
    },
    {
      id: 'p25_vermont',
      author: 'Parada',
      timestamp: 'Summer 2025',
      content: (
        <div>
          The Vermont Migration. Relocating from Brooklyn to Stowe. The physical perimeter is now sealed. Pixels is architecting a studio space that mirrors the redundancy of a ZFS array. Physical isolation is the ultimate firewall.
        </div>
      ),
      comments: []
    },
    {
      id: 'p24_rebound',
      author: 'Parada',
      timestamp: 'September 2024',
      content: (
        <div>
          <p>2024 is the rebound. Battling an illegal housing situation and the specter of homelessness while still pushing commits to my systems design projects. Entreprenurism isn't a 'career path' for me; it's the only way to survive a system that wants to label and bin you.</p>
          <p style={{marginTop: '10px'}}>I am building for the freelancers, the creators, and the sovereign individuals who understand that 'sovereignty' starts with your own hardware. If the roof over your head is fragile, your infrastructure must be solid.</p>
        </div>
      ),
      comments: [{ author: 'Architect', body: 'Building through the storm.' }]
    },
    {
      id: 'p24_camera_ny',
      author: 'Parada',
      timestamp: 'Summer 2024',
      content: (
        <div style={{borderLeft: '2px solid #666', paddingLeft: '15px'}}>
          <p>I sold my camera in New York today. A piece of my history for the currency to build my future. It was the hardest trade I’ve ever made, but you can’t capture the light if you’re trapped in the frame. Moving from the lens to the kernel. Pixels is no longer just a gallery; it’s an architecture.</p>
        </div>
      ),
      comments: []
    },
    {
      id: 'p23_homeless',
      author: 'Parada',
      timestamp: 'December 2023',
      content: (
        <div>
          Learning ZFS and kernel optimization from a laptop in a shelter. When you have nothing, you realize that data preservation is the only way to keep your history from being deleted by the landlords of the world. Digital feudalism is real, and I'm learning how to siege the castle.
        </div>
      ),
      comments: []
    },
    /* UNIVERSITY ERA: 2018 - 2022 */
    {
      id: 'u22_1',
      author: 'Parada',
      timestamp: 'May 2022',
      content: (
        <div>
          <p>Degree Conferred: Health Sciences & Economics. But the real curriculum was the 4-year battle with my father’s mental health. Every lecture on homeostatic systems was just a mirror for the instability I was trying to manage at home.</p>
          <p style={{marginTop: '10px'}}>I studied the economics of scarcity while living through it. The digital world is just a way to scale that scarcity and sell it back to us. I'm choosing a different modality.</p>
        </div>
      ),
      comments: []
    },
    {
      id: 'u21_1',
      author: 'Parada',
      timestamp: 'November 2021',
      content: (
        <div>
          The 'Integrity' Arms Race: Universities installing rootkits to spy on students. It's a zero-sum game played on 400MB of unoptimized RAM. Privilege is a function of local compute; if you can't afford the GPU to run the 'aids,' you're already behind.
        </div>
      ),
      comments: []
    },
    {
      id: 'u20_1',
      author: 'Parada',
      timestamp: 'April 2020',
      content: (
        <div>
          Lockdown. Auditing the homelab. Bare metal doesn't get viruses from the outside world if the perimeter is sealed. Watching the world realize they have no data sovereignty. The enclosure is accelerating.
        </div>
      ),
      comments: []
    },
    /* ORIGINS */
    {
      id: 'p17_1',
      author: 'Parada',
      timestamp: 'August 2017',
      content: (
        <div>
          Python at 17. The transition from 'hello world' to 'hello infrastructure.' Indentation is life. Finding a shorthand for a universe that was starting to feel far too loud.
        </div>
      ),
      comments: []
    },
    {
      id: 'p16_1',
      author: 'Parada',
      timestamp: 'July 2016',
      content: (
        <div>
          Engineering camp. 16 years old. Seeing a neural net 'learn' for the first time. It felt like watching a god being born. Then I realized they'd use it to optimize ad-clicks. The disappointment was architectural.
        </div>
      ),
      comments: [
        { author: 'Signal', body: 'The beginning of the quiet.' }
      ]
    },
    {
      id: 'p12_1',
      author: 'Parada',
      timestamp: 'April 2012',
      content: (
        <div>
          The post-Buzz world is chaotic. Everyone is migrating to Twitter. They're trading privacy for a better 'Like' button. I'm staying in the terminal. The migration underground begins.
        </div>
      ),
      comments: []
    },
    {
      id: 'p11_1',
      author: 'Parada',
      timestamp: 'Circa 2011',
      content: (
        <div style={{fontStyle: 'italic', color: '#888'}}>
          [SIGNAL LOST: GOOGLE BUZZ DEPRECATED. ARCHITECTS MOVING TO SECURE OFFLINE NODES...]
        </div>
      ),
      comments: []
    }
  ];
};
