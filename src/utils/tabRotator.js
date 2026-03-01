export function initTabRotator() {
    const originalTitle = document.title;
    let isRotating = false;
    let rotationInterval;

    // Custom messages recommended for a hair salon
    const messages = [
        "💇‍♀️ Need a trim?",
        "✨ Book your glow up!",
        "💆‍♀️ Relax with us...",
        "✂️ Fresh cuts available",
        "🎨 Time for new color?",
        "🌟 Treat yourself today!",
        originalTitle
    ];

    let currentIndex = 0;

    function rotateTitle() {
        document.title = messages[currentIndex];
        currentIndex = (currentIndex + 1) % messages.length;
    }

    // Start rotating when user leaves the tab
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            if (!isRotating) {
                // Start rotation
                currentIndex = 0;
                isRotating = true;
                rotationInterval = setInterval(rotateTitle, 2000); // Change every 2 seconds
            }
        } else {
            // User came back, stop rotation and restore original title
            if (isRotating) {
                clearInterval(rotationInterval);
                isRotating = false;
                document.title = originalTitle;
            }
        }
    });
}
