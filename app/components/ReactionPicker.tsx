import { useState } from 'react';

// TODO: Add useState hook for managing reaction counts
// TODO: Add state for selected reaction
// TODO: Create click handlers that update counts

const reactions = [
  { emoji: '👍', label: 'thumbsUp' },
  { emoji: '❤️', label: 'heart' },
  { emoji: '😂', label: 'laugh' },
  { emoji: '😮', label: 'wow' },
  { emoji: '😢', label: 'sad' },
];

export default function ReactionPicker() {
  // TODO: Initialize state for reaction counts (object with labels as keys)
  // TODO: Initialize state for selected reaction

  return (
    <div className="flex gap-4 p-4 bg-gray-700 rounded-lg">
      {reactions.map((reaction) => (
        <button
          key={reaction.label}
          className="flex items-center gap-2 px-3 py-2 bg-gray-600 hover:bg-gray-500 rounded-full transition"
          // TODO: Add onClick handler
        >
          <span className="text-xl">{reaction.emoji}</span>
          {/* TODO: Display count here */}
          <span className="text-white text-sm">0</span>
        </button>
      ))}
    </div>
  );
}