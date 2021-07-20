import ReactDOM from 'react-dom'


function getNodeSizeCB(node, className) {
    if(node) {
        let selectedNode = ReactDOM.findDOMNode(node).getElementsByClassName(className)
        const nodeArr = Array.from(selectedNode)
        const nodeSizes = nodeArr.map((el) => el.offsetWidth)
        nodeArr.map((element) => element.setAttribute("style", `width:${Math.max(...nodeSizes) + 15}px`))
        
    }
}

export default getNodeSizeCB;