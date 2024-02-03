const DiscordRPC = require('discord-rpc');

const clientId = '1203044654052941924'; // Replace with your Discord app client ID
const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  console.log('Connected to Discord');

    // Set the presence
      rpc.setActivity({
          details: 'Title Here',
              state: 'State Here',
                  largeImageKey: 'sen2011',
                      smallImageKey: 'sen2011',
                          largeImageText: 'Large Image Text',
                              smallImageText: 'Small Image Text',
                                  buttons: [
                                        { label: 'Button 1', url: 'https://example.com/button1' },
                                              { label: 'Button 2', url: 'https://example.com/button2' },
                                                  ],
                                                    });
                                                    });

                                                    rpc.login({ clientId }).catch(console.error);
                                                    