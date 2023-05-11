<div class="relative overflow-hidden p-4 border border-2">
    <div id="zoom">
        <img src="{src}" alt="zoom">
    </div>
</div>

<script>
    import { onMount } from 'svelte';

    export let src;

    onMount(() => {
        let zoom = document.getElementById("zoom");

        let scale = 1,
            panning = false,
            pointX = 0,
            pointY = 0,
            start = { x: 0, y: 0 };

        function setTransform() {
            zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
        }

        function logConsole() {
            console.log(scale)
        }

        zoom.onmousedown = function (e) {
            e.preventDefault();
            if (scale > 1) {
                start = { x: e.clientX - pointX, y: e.clientY - pointY };
                panning = true;
            } else {
                start = { x: 0, y: 0 };
            }
        }

        zoom.onmouseup = function (e) {
            panning = false;
        }

        zoom.onmousemove = function (e) {
            e.preventDefault();
            if (!panning) {
                return;
            }
            pointX = (e.clientX - start.x);
            pointY = (e.clientY - start.y);
            setTransform();
        }

        zoom.onwheel = function (e) {
            e.preventDefault();

            let quotient = 1.2;

            let xs = (e.clientX - pointX) / scale,
                ys = (e.clientY - pointY) / scale,
                delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);

            if (scale >= 1 && delta > 0) {
                quotient = 1.2;
                (delta > 0) ? (scale *= quotient) : (scale /= quotient);
                pointX = e.clientX - xs * scale;
                pointY = e.clientY - ys * scale;
            } else {
                scale = 1;
                quotient = 1;
                pointX = 0;
                pointY = 0;
                start = { x: 0, y: 0 };
            }

            setTransform();
        }
    });


</script>

<style>
    #zoom {
        width: 100%;
        height: 100%;
        transform-origin: 0px 0px;
        transform: scale(1) translate(0px, 0px);
        cursor: grab;
    }
    div#zoom > img {
        width: 100%;
        height: auto;
    }
</style>