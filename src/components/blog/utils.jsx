export const formatBlogContent = (content) => {
  const lines = content.split("\n");
  return lines.map((line, index) => {
    if (line.includes(":")) {
      const [title, ...rest] = line.split(":");
      return (
        <p key={index}>
          <strong>{title}:</strong> {rest.join(":")}
        </p>
      );
    }
    return <p key={index}>{line}</p>;
  });
};
