interface Button {
  title: string;
}

export default function Button({ title }: Button) {
  return (
    <div>
      <button>{title}</button>
    </div>
  );
}
