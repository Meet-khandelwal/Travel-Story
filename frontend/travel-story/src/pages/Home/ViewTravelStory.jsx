import { useState } from "react";
import moment from "moment";
import { GrMapLocation } from "react-icons/gr";
import { MdUpdate, MdClose, MdDeleteOutline } from "react-icons/md";

const ViewTravelStory = ({ storyInfo, onClose, onEditClick, onDeleteClick }) => {
    const [isImageExpanded, setIsImageExpanded] = useState(false);

    const handleImageClick = () => {
        setIsImageExpanded(true);
    };

    const handleCloseExpandedImage = () => {
        setIsImageExpanded(false);
    };

    return (
        <div className="relative">
            <div className="flex items-center justify-end">
                <div>
                    <div className="flex items-center gap-3 bg-cyan-50/50 p-2 rounded-l-lg">
                        <button className="btn-small" onClick={onEditClick}>
                            <MdUpdate className="text-lg" />UPDATE STORY
                        </button>
                        <button className="btn-small btn-delete" onClick={onDeleteClick}>
                            <MdDeleteOutline className="text-lg" />Delete
                        </button>
                        <button onClick={onClose}>
                            <MdClose className="text-xl text-slate-400" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex">
                {/* Left Content */}
                {!isImageExpanded && (
                    <div className="flex-1 flex flex-col gap-2 py-4">
                        <h1 className="text-2xl text-slate-950">
                            {storyInfo && storyInfo.title}
                        </h1>
                        <div className="flex items-center justify-between gap-3">
                            <span className="text-xs text-slate-500">
                                {storyInfo &&
                                    moment(storyInfo.visitedDate).format("Do MMM YYYY")}
                            </span>
                            <div
                                className="inline-flex 
                                    items-center gap-2 
                                    text-[13px] 
                                    text-cyan-600 
                                    bg-cyan-200/40 
                                    rounded px-2 py-1"
                            >
                                <GrMapLocation className="text-sm" />
                                {storyInfo &&
                                    storyInfo.visitedLocation.map((item, index) =>
                                        storyInfo.visitedLocation.length === index + 1
                                            ? `${item}`
                                            : `${item},`
                                    )}
                            </div>
                        </div>

                        <img
                            src={storyInfo && storyInfo.imageUrl}
                            alt="Image"
                            className="w-full h-[300px] object-cover rounded-lg cursor-pointer"
                            onClick={handleImageClick}
                        />

                        <div className="mt-4">
                            <p className="text-sm text-slate-950 leading-6 text-justify whitespace-pre-line">
                                {storyInfo.story}
                            </p>
                        </div>
                    </div>
                )}

                {/* Right Expanded Image */}
                {isImageExpanded && (
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="relative">
                            <img
                                src={storyInfo && storyInfo.imageUrl}
                                alt="Expanded View"
                                className="max-h-[80vh] object-contain rounded-lg"
                            />
                            <button
                                className="absolute top-2 right-2 bg-slate-800 text-white p-2 rounded-full"
                                onClick={handleCloseExpandedImage}
                            >
                                <MdClose className="text-lg" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewTravelStory;

