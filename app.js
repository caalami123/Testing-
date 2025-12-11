const RPC = "http://18.117.220.138:8545"; // AWS Public RPC
async function rpc(method, params = []) {
    const res = await fetch(RPC, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: 1,
            method,
            params
        })
    });

    return res.json();
}
