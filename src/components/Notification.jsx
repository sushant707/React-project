const Notification = ({ message, type }) => {
  if (!message) return null;

  return (
    <div className={`alert alert-${type} mt-3`} role="alert">
      {message}
    </div>
  );
};

export default Notification;
