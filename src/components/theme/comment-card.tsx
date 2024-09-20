import React from 'react';
import { Card, CardContent } from '../ui/card'; // Adjust the import path as necessary
import { Badge } from '../ui/badge'; // Adjust the import path as necessary
import { BsChatLeftDots } from 'react-icons/bs'; // Adjust the import path as necessary

interface Comment {
  name: string;
  message: string;
  status: string;
  badgeColor: string;
}

interface CommentCardProps {
  comments: Comment[];
}

const CommentCard: React.FC<CommentCardProps> = ({ comments }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h4 className="text-gray font-medium text-2xl mb-2">
          <BsChatLeftDots className="w-5 h-5 inline-block mr-1" />
          <span className="text-lg font-medium text-gray-700">{comments.length}</span>
        </h4>
        <hr className="border-platinum border-b-2" />
        {comments.map((comment, index) => (
          <div key={index} className="py-4">
            <div className="flex items-center gap-5">
              <h5 className="text-gray text-2xl font-bold">{comment.name}</h5>
              <Badge className={comment.badgeColor}>{comment.status}</Badge>
            </div>
            <div className="p-4">
              <p className="text-philippine-silver font-bold text-xl">
                {comment.message}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CommentCard;