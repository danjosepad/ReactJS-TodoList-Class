import React from 'react';

function TechItem({ tech, handleDelete }) {
  return (
    <li key={tech}>
      {tech}
      <button onClick={handleDelete} type="button">Remover</button>
    </li>
  )
}
TechItem.defaultProps = {
  tech: 'Oculto'
}
export default TechItem;