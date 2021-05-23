import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { dataProps: data },
  };
};

const Data = ({ dataProps }) => {
  console.log(dataProps);

  return (
    <div>
      <h1>All Data</h1>
      {dataProps.map((data) => (
        <Link href={"/data/" + data.id} key={data.id}>
          <a>
            <h3>{data.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Data;
