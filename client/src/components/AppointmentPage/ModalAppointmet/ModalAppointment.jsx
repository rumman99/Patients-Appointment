import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import './modalAppointment.css'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const ModalAppointment = ({modalIsOpen, closeModal, subject, selectDate}) => {
    // React Form Hook //
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
        } = useForm()
        const onSubmit = (data) => {
        data.title = subject.subject;
        data.date = selectDate;
        data.time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        fetch('http://localhost:3333/appointment',{
            method: "POST",
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })
        .then(result => result.json())
        .then(finalResult => {
            if(finalResult){
                alert("Appointment Create Successfully");
                closeModal();
                reset();
            }
        })  
    }

    // Modal //
    Modal.setAppElement('#root');

    return (
        <>
            <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <div className='fw-bolder fs-4 customColor text-center'>{subject.subject}</div>
                <h6 className='text-secondary text-center'>Date: {selectDate}</h6>
                <form className='formDesign' onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder='Your Name?'
                    {...register("name", { required: true })}
                    aria-invalid={errors.name ? "true" : "false"}
                /> <br/>
                {errors.name?.type === "required" && (
                    <p className='text-danger' role="alert">Name is required</p>
                )}

                <input type='number' placeholder='Your Mobile Number?'
                    {...register("phone", { required: "Phone Number is required" })}
                    aria-invalid={errors.phone ? "true" : "false"}
                /> <br/>
                {errors.phone && <p className='text-danger' role="alert">{errors.phone.message}</p>}

                <input type='email' placeholder='Your Email?'
                    {...register("email", { required: "Email Address is required" })}
                    aria-invalid={errors.email ? "true" : "false"}
                /> <br/>
                {errors.email && <p className='text-danger' role="alert">{errors.email.message}</p>}

                <input type='number' placeholder='Your Age?'
                {...register("age", { required: "Age is required" })}
                aria-invalid={errors.age ? "true" : "false"}
                /> <br/>
                {errors.age && <p className='text-danger' role="alert">{errors.age.message}</p>}

                <select {...register("gender")}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                </select> <br/>
                <div className='singleBtnStyle'>
                <input className='customButton border-0' value='SEND' type="submit" />
                </div>
                </form>
            </Modal>
            </div>
        </>
    );
};

export default ModalAppointment;