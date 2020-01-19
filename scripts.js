let double;

const init = function() {
    console.log(double(5));
};

function loadWebAssembly(fileName) {
    return fetch(fileName)
        .then(response => response.arrayBuffer())
        .then(bits => WebAssembly.compile(bits))
        .then(module => { return new WebAssembly.Instance(module) });
}

loadWebAssembly('double.wasm')
    .then(instance => {
        double = instance.exports._Z2ggi;
        console.log(`Finish compiling! Ready to use...`);
        init();
    });

