

function differenceFinder(){
    try {
        const json1Input = document.getElementById('jsonInput').value;
        const json1Object = JSON.parse(json1Input);
        const flattened1 = flatten(json1Object);
        const json2Input = document.getElementById('jsonInput2').value;
        const json2Object = JSON.parse(json2Input);
        const flattened2 = flatten(json2Object);
        const difference={};
        for(const key in flattened1){
            if(!flattened2[key]){
                difference[key]=flattened1[key];
            }
        }
        for(const key in flattened2){
            if(!flattened1[key]){
                difference[key]=flattened2[key];
            }
        }
        document.getElementById('input-form').classList.add('display-none');
        document.getElementById('output-form').classList.remove('display-none');
        document.getElementById('difference-box').value = JSON.stringify(difference, null, 2);
    } catch (error) {
        alert('Invalid JSON input. Please check your JSON format and try again.');
    }
}

function goBack(){
    document.getElementById('output-form').classList.add('display-none');
    document.getElementById('input-form').classList.remove('display-none');
}