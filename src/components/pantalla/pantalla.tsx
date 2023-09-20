interface PantallaProps {
  input: string;
}

const Pantalla: React.FC<PantallaProps> = ({ input }) => (
  <div className='pantalla'>
    {input}
  </div>
);

export default Pantalla;