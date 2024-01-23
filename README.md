# WealthHealth - Modal

## Installation
- Utilisez cette commande pour installer le package: `npm i @monkeylectric/modal-wealth-health`

## Usage
```jsx
import React, { useState } from 'react';
import Modal from '@monkeylectric/modal-wealth-health';

const [displayModal, setDisplayModal] = useState(false);

const handleDisplayedModal = () => {
    setDisplayModal(true);
}

const handleCloseModal = () => {
    setDisplayModal(false);
}

render(
  <button onClick={() => handleDisplayedModal()}>Open Modal</button>
  {displayModal && <Modal 
      handleCloseModal={handleCloseModal}
      message="message" 
      overlayOpacity={.8} 
      modalBackground="#E2FA48" 
      modalColor="#32a852" 
  />}
)
```

## Paramètres

### message
> `string`
Le message de la modal

### overlayOpacity
> `number`
L'opacité de l'overlay en arrière-plan

### modalBackground
> `string`
Couleur de fond de la modal

### modalColor
> `string`
Couleur de texte de la modal