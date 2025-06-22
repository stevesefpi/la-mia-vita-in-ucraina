import Link from "next/link";

export default function GuidePage() {
  return (
    <>
      <h1>Le guide</h1>
      <ul>
        <li>
            <Link href="/guide/viaggio-ucraina">Come raggiungere l'Ucraina</Link>
        </li>
      </ul>
    </>
  );
}
