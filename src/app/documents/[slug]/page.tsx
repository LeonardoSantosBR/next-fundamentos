export default async function Document({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  return (
    <>
      <h1>{slug}</h1>
      <p>descrição</p>
    </>
  );
}
