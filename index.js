marked.setOptions({
    breaks: true
})


function MyComponent() {

const [text, setText] = React.useState(`
# H1
## H2
[title](https://www.example.com)
\`code\`
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

- First item
- Second item
- Third item

> blockquote
![alt text](image.jpg)
**bold text**
`);


    return (
<div className="text-center px-4">
    <h1 className="p-4">Markdown Previewer</h1>
    <textarea rows="10" className="textarea" id="editor" value={text} onChange={(event) => setText(event.target.value)}>
    </textarea>
    <h2 className="mt-3 mb-3">Previewer</h2>
     <div id="preview" dangerouslySetInnerHTML={{__html: marked(text)}}></div>
    </div>
    )
}


ReactDOM.render(<MyComponent />, document.getElementById("app"))