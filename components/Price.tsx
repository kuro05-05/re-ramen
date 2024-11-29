interface Price {
  price: number;
}

export default function Price({ price }: Price) {
  return (
    <>
      &yen;{price.toLocaleString()}&nbsp;
      <span>(税込)</span>
    </>
  );
}
