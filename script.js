function toggleBoard(boardId) {
    const board = document.getElementById(boardId);
    const isVisible = board.style.transform === 'translateX(0%)';

    if (isVisible) {
        board.style.transform = boardId === 'journey-board' ? 'translateX(-200px)' : 'translateX(200px)';
    } else {
        board.style.transform = 'translateX(0%)';
    }
}
