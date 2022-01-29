import { useUserContext } from "../userContext";
import { motion } from "framer-motion";
function Login() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const { log, setLog } = useUserContext();
  const d = new Date();

  let minutes = d.getMinutes();
  let hour = d.getHours();
  let day = d.getDay();
  let month = d.getMonth();
  let date = d.getDate();
  let year = d.getFullYear();

  return (
    <div
      onClick={() => {
        setLog(false);
      }}
      className="w-screen h-screen text-white bg-wallpaper bg-cover object-fill"
    >
      <motion.div
        data-aos-duration="1000"
        data-aos="fade-down"
        className=" pt-20"
      >
        <h1 className=" text-center font-bold text-9xl">
          {hour}:{minutes < 10 ? "0" : ""}
          {minutes}
        </h1>
        <h2 className=" text-center text-xl mt-5">
          {days[day]}, {date} {months[month]}
        </h2>
      </motion.div>
    </div>
  );
}

export default Login;
