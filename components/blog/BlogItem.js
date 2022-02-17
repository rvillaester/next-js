import Card from '../ui/Card';
import classes from './BlogItem.module.css'

const BlogItem = (props) => {

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.title}>{props.title}</div>
                <div className={classes.content} dangerouslySetInnerHTML={{ __html: props.content }}></div>
            </Card>
        </li>
    );

}

export default BlogItem;