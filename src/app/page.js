export default function Page() {
  return (
    <div className="m-8">
      <div className="card">
        <h1>Belum dibikin nih Homepage nya puh, sepuhh...</h1>
        <h2>Bantuin kami dong puhhh, aku mah masih pemula</h2>
      </div>

      <input type="text" placeholder="Input" />
      <textarea placeholder="Textarea" />
      <select>
        <option>Makan Gorengan</option>
        <option>Makan Bubur Ayam</option>
      </select>
      <button>Submit</button>
      <button className="btnSecondary">Secondary</button>
      <button className="btnOutline">Outline</button>
      <button className="btnGhost">Ghost</button>
    </div>
  );
}
