function flattenJson() {
    try {
        const jsonInput = document.getElementById('jsonInput').value;
        const jsonObject = JSON.parse(jsonInput);
        const flattened = flatten(jsonObject);
        document.getElementById('flattenedJson').value = JSON.stringify(flattened, null, 2);
    } catch (error) {
        alert('Invalid JSON input. Please check your JSON format and try again.');
    }
}

function flatten(data) {
    const result = {};

    function recurse(cur, prop) {
        if(cur['value']!=null){
            if(cur['value']){
                result[prop] = cur;
            }
        }
        else if (Object(cur) !== cur || Array.isArray(cur)) {
            result[prop] = cur;
        } else {
            let isEmpty = true;
            
            for (const p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? `${prop}.${p}` : p);
            }
            if (isEmpty && prop) {
                result[prop] = {};
            }
        }
    }

    recurse(data, '');
    return result;
}