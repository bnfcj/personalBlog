function Save({ saveContent, inactiveStyle }) {
  return (
    <button onClick={saveContent} className={inactiveStyle}>
      Save Content
    </button>
  );
}

export default Save;
