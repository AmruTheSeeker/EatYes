export default function Page() {
  return (
    <div className="m-8">
      <div className="card">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
      </div>

      <input type="text" placeholder="Input" />
      <textarea placeholder="Textarea" />
      <select>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
      <button>Submit</button>
      <button className="btnSecondary">Secondary</button>
      <button className="btnOutline">Outline</button>
      <button className="btnGhost">Ghost</button>
    </div>
  );
}
