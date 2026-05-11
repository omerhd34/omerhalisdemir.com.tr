export default function IyzicoIcon({ className, ...props }) {
 return (
  <img
   src="/images/iyzico_ile_ode_colored.svg"
   alt=""
   aria-hidden="true"
   className={`aspect-square object-contain ${className ?? ""}`}
   {...props}
  />
 );
}
