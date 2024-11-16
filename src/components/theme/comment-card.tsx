import React from "react";
import { Card, CardContent } from "../ui/card"; // Adjust the import path as necessary
import { Badge } from "../ui/badge"; // Adjust the import path as necessary
import { BsChatLeftDots } from "react-icons/bs"; // Adjust the import path as necessary
import { useGetAllInvitationMessageQuery } from "@/store/features/message/message-slice";

interface Comment {
  name: string;
  message: string;
  status: string;
  badgeColor: string;
}

interface CommentCardProps {
  comments: Comment[];
  uniqueId?: string;
  isTemplate?: boolean;
}

const CommentCard: React.FC<CommentCardProps> = ({
  comments,
  uniqueId,
  isTemplate = false,
}) => {
  const { data: messages } = useGetAllInvitationMessageQuery(uniqueId);
  let commentList = comments;
  if (!isTemplate) {
    commentList = messages?.data ? [...messages.data] : [];
    commentList.reverse();
  }

  return (
    <Card>
      <CardContent className="p-6">
        <h4 className="text-gray font-medium text-2xl mb-2">
          <BsChatLeftDots className="w-5 h-5 inline-block mr-2" />
          <span className="text-lg font-medium text-gray-700">
            {messages?.data.length}
          </span>
        </h4>
        <hr className="border-platinum border-b-2" />
        {commentList &&
          commentList.map((comment: any, index: number) => (
            <div key={index} className="py-2 md:py-4">
              <div className="flex items-center gap-5">
                <h5 className="text-gray text-base md:text-lg font-semibold">
                  {comment.name}
                </h5>
                <Badge>{comment.guest_invitation.status ?? "Maybe"}</Badge>
              </div>
              <div className="p-2 md:p-4  bg-slate-50 rounded-md mt-1 md:mt-2">
                <p className="text-philippine-silver font-normal md:font-normal text-sm md:text-base">
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
