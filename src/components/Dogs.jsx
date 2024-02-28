import Dog from "./Dog"

const Dogs = ({ dogs }) => {
  return (
    <ul>
      {!dogs.length ? null : dogs.map((dog) => ( 
        <Dog dog={dog} />
      ))} 
    </ul>
  )
}

export default Dogs;
