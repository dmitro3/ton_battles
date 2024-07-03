import React, { useState } from 'react';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { toNano } from '@ton/ton'

interface TopUpModalProps {
  onClose: () => void;
  onTopUp: (amount: number) => void;
}

const TopUpModal: React.FC<TopUpModalProps> = ({ onClose, onTopUp }) => {
  const [amount, setAmount] = useState(0);
  const [tonConnectUI] = useTonConnectUI();

  const handleTopUp = async () => {
    try {
      
      const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
        messages: [
          {
            address: 'UQCuzcR3-BXHkYHk7mN5ghbsUAX74mj-6BLn0wzvvXKHLXKx', // replace with your main wallet address
            amount: toNano(amount).toString(),
            payload: ''
          }
        ]
      };
      await tonConnectUI.sendTransaction(transaction);
      onTopUp(amount);
    } catch (error) {
      console.error('Transaction error:', error);
    }
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Top Up Balance</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <button onClick={handleTopUp}>Top Up</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TopUpModal;
