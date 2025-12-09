export default function Map() {
  return (
    <div className="w-full h-[450px] my-10 rounded-lg overflow-hidden shadow-md">
      <iframe
        title="Renal Bloom Location"
        src="https://www.google.com/maps?q=Mohamed%20Youssef%20Mousa%20Street,%20Nasr%20City,%20Cairo,%2011371,%20Egypt&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
