import { Lokal } from 'lokal-js';

// Vite plugin to log host and port
export default function lokalTunnel(options = {}) {
    const { tunnelName, lanAddress, publicAddress } = options;

    return {
        name: 'lokal-tunnel',
        configureServer(server) {
            server.httpServer.once('listening', async () => {
                const address = server.httpServer.address();
                const host = address.address.startsWith('::') ? 'localhost' : address.address;
                const port = address.port;
                const lokal = new Lokal();

                await lokal
                    .newTunnel()
                    .setLocalAddress(`${host}:${port}`)
                    .setTunnelType('HTTP')
                    .setName(tunnelName)
                    .setPublicAddress(publicAddress)
                    .setLANAddress(lanAddress)
                    .showStartupBanner()
                    .ignoreDuplicate()
                    .create();
            });
        }
    };
}
