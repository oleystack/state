import './Demo.css'

function Demo() {
  console.log(process.env)
  return (
    <div className='demo-container'>
      {process.env.NODE_ENV === 'development' ? 'dev' : 'prod'}
    </div>
  )
}

export default Demo
