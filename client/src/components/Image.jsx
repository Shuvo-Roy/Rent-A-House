// export default function Image({src,...rest}) {
//     src = src && src.includes('https://')
//       ? src
//       : 'http://localhost:4000/uploads/'+src;
//     return (
//       <img {...rest} src={src} alt={''} />
//     );
//   }

export default function Image({ src, ...rest }) {
  // Check if the src is an absolute URL (starts with http:// or https://)
  const isAbsoluteUrl = /^https?:\/\//.test(src);

  // If it's not an absolute URL, prefix it with the base URL
  if (!isAbsoluteUrl) {
    src = 'http://localhost:4000/uploads/' + src;
  }

  return <img {...rest} src={src} alt={''} />;
}