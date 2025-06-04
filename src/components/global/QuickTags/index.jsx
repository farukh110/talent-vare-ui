import CustomButton from '@/components/ui/Button';
import './index.scss';

const QuickTags = ({ tags, onTagClick }) => {

    // When mouse enters button, switch to active style
    const handleMouseEnter = (e) => {
        e.currentTarget.classList.remove('btn-custom-tag');
        e.currentTarget.classList.add('btn-active-tag', 'text-white');
    };

    // When mouse leaves button, revert to default style
    const handleMouseLeave = (e) => {
        e.currentTarget.classList.add('btn-custom-tag');
        e.currentTarget.classList.remove('btn-active-tag', 'text-white');
    };

    return (
        <>
            <div className="d-flex flex-wrap gap-3 align-items-center">
                <span className="me-2 tag-title">Similar:</span>
                {tags.map((tag) => (
                    <CustomButton
                        key={tag}
                        type="button"
                        onClick={() => onTagClick(tag)}
                        className="btn btn-custom-tag btn-sm"
                        style={{ transition: 'all 0.2s' }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {tag}
                    </CustomButton>
                ))}
            </div>

            <div className="gap-3 align-items-center">
                <div className="sep my-3"></div>
            </div>
        </>
    );
};

export default QuickTags;
