const parent = React.createElement('div',{id:'parent'},
[React.createElement('div',{id:'child'},[
    React.createElement('h1',{},'iam hi tehg'),
    React.createElement('h2',{},'iam an h2 tag'),
]),React.createElement('div',{id:'child2'},[
    React.createElement('h1',{},'iam hi tehg'),
    React.createElement('h2',{},'iam an h2 tag'),
])]
)




// const heading =  React.createElement('h1',
// {id:'heading',
// xyz:'abc'},
// 'hello world from react')


console.log(parent);//object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)


