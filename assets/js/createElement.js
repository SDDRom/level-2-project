export const createElementsAndAppend = {
    createElements:function(tagName, elementAttribute = {}) {
        if (tagName) {
            tagName = tagName;
        }else{
            tagName = 'section';
        }
        const createdElement = document.createElement(tagName);
    
        for(const [key,value] of Object.entries(elementAttribute)){
            if(key == 'class'){
                createdElement.classList.add(value);
            }else{
                createdElement.setAttribute(key,value);
            }
        }
        return createdElement;
    },

    appendAChild:function(parentName, children = []) {
        if(children.length == 1){
            parentName.appendChild(children[0]);
            return parentName;
        }
        children.forEach(childNode =>{
            parentName.appendChild(childNode);
        })
        return parentName;
    },

    assignText:function(domObject,text = ''){
        if(text){
            text = text;
        }else{
            text = 'Ommited some dummy text';
        }
         domObject.textContent = text;
         return domObject;
    }
}