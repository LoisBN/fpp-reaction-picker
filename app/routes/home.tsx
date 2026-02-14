import ReactionPicker from '~/components/ReactionPicker';
import PostContent from '~/components/PostContent';

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4">Your Challenge</h2>
        <ol className="text-gray-300 space-y-2 list-decimal list-inside">
          <li>Import useState from React</li>
          <li>Create state for reaction counts (object with emoji labels as keys)</li>
          <li>Create state for selected reaction</li>
          <li>Add onClick handlers to update counts when reactions are clicked</li>
          <li>Display the count next to each reaction button</li>
          <li>Style selected reactions differently</li>
        </ol>
      </div>

      <div className="max-w-2xl">
        <PostContent />
        <ReactionPicker />
      </div>
    </div>
  );
}