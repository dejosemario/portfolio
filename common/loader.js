import Image from 'next/image';

function Loader(props) {
  const style = {
    borderRadius: '50%',
  }
  return (
    <div>
      <Image
        className='loader'
        src="/images/loader.jpg"
        alt="loader"
        width='100'
        height='100'
        style={style}
      />
    </div>
  );
}

export default Loader;