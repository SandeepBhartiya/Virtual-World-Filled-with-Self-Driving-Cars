 class Graph{
    constructor(points=[],segments=[]){
        this.points=points;
        this.segments=segments;
    }

    addPoint(point)
    {
        this.points.push(point);
    }

    containsPoint(point)
    {
        return this.points.find((p)=>p.equals(point));
    }

    tryAddPoint(point){
        if(!this.containsPoint(point))
        {
            this.addPoint(point);
            return true;
        }
        return false;
    }

    removePoint(point)
    {
        const segs=this.getSegmentWithPoint(point)
        for(const seg of segs)
        {
            this.removeSegment(seg);
        }
        this.points.splice(this.points.indexOf(point),1)
        
    }

    getSegmentWithPoint(point)
    {
        const segs=[];
        for(const seg of  this.segments)
        {
            if(seg.includes(point))
            {
                segs.push(seg);
            }
        }
        return segs;
    }
    addSegment(seg){
        this.segments.push(seg);
    }

    containSegment(seg)
    {
        return this.segments.find((s)=>s.equals(seg));
    }

    tryAddSegment(seg){
        if(!this.containSegment(seg) && !seg.p1.equals(seg.p2))
        {
            this.addSegment(seg);
            return true;
        }
        return false;
    }
    removeSegment(seg)
    {
        console.log("y",seg,this.segments.indexOf(seg));
        this.segments.splice(this.segments.indexOf(seg),1);
    }

    clear()
    {
        this.points.length=0;
        this.segments.length=0;
    }
    draw(ctx)
    {
        for(const seg of this.segments)
        {
            seg.draw(ctx);
        }

        for(const points of this.points)
        {
            points.draw(ctx);
        }
    }
 }