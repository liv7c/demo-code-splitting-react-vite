import {Modal} from '../components/Modal'

function About() {
  return (
    <>
      <h1 className="mb-5 text-4xl font-bold">About</h1>
      <div className="space-y-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem
          aliquam eveniet est sint itaque minima sequi maiores maxime, unde
          assumenda delectus voluptas rerum facilis aliquid libero veritatis
          praesentium temporibus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem
          aliquam eveniet est sint itaque minima sequi maiores maxime, unde
          assumenda delectus voluptas rerum facilis aliquid libero veritatis
          praesentium temporibus?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi error
          commodi vero sed numquam sequi expedita voluptas reiciendis amet
          delectus iusto nemo veniam, dolorem sapiente id deserunt sint porro!
          Cumque!
        </p>
        <Modal
          title="Check out our latest features"
          triggerText="Check out our latest features"
        >
          <div className="space-y-5 py-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quaerat cupiditate tempora dignissimos soluta. Non assumenda,
              numquam ullam eum suscipit, eius illo enim provident odio
              voluptate, praesentium similique iure saepe?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quaerat cupiditate tempora dignissimos soluta. Non assumenda,
              numquam ullam eum suscipit, eius illo enim provident odio
              voluptate, praesentium similique iure saepe?
            </p>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default About
