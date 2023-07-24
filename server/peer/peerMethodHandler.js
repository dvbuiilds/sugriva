const createPeerServerListeners = (peerServer) => {
    peerServer.on('connection', (client)=>{ });
};

module.exports = {
    createPeerServerListeners
};