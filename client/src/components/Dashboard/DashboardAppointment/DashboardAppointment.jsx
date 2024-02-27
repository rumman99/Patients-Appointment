const DashboardAppointment = ({appointment, selectDate}) => {

    return (
        <div>
            <h1 className="text-center">Appointment: {appointment.length}</h1>
            {appointment.length ? <div>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Serial</th>
                    <th scope="col">Treatment</th>
                    <th scope="col">Name</th>
                    <th scope="col">Time</th>
                    <th scope="col">Number</th>
                    </tr>
                </thead>
                <tbody>
                {appointment.map((data, index)=>(
                    <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{data.title}</td>
                    <td>{data.name}</td>
                    <td>{data.time}</td>
                    <td>{data.phone}</td>
                    </tr>
                    )
                )}
                </tbody>
                </table>
                </div> : <h1 className="text-center text-danger mt-5">No Appointment On {selectDate.toDateString()}</h1>}
        </div>
    );
};

export default DashboardAppointment;