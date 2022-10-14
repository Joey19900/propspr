import FullName from "./FullName";
export default function Son({ firstName, lastName, color }) {
  return (
    <h1 style={{ color }}>
      <FullName firstName={firstName} lastName={lastName} />
    </h1>
  );
}
