let isShowingMenu = false;

export const moveSideBar = function moveSideBar(removeOnly: boolean) {
  const sideBar = document.getElementById('sideBar');
  const whiteBg = document.getElementById('whiteBg');
  if (sideBar && whiteBg) {
    const sideBarStyle = window.getComputedStyle(sideBar);
    if (isShowingMenu) {
      sideBar.style.transition = 'all ease-in 250ms';
      sideBar.style.left = sideBarStyle.width;
      sideBar.style.left = '-100%';
      isShowingMenu = !isShowingMenu;
      whiteBg.style.pointerEvents = 'none';
      return;
    }
    if (!removeOnly) {
      sideBar.style.transition = 'all ease-out 250ms';
      sideBar.style.left = '0px';
      sideBar.style.left = sideBarStyle.width;
      isShowingMenu = !isShowingMenu;
      whiteBg.style.pointerEvents = 'auto';
    }
  }
};

export const tabs = [{
  name: 'About',
  action: () => document.getElementById('meetUs')?.scrollIntoView({ behavior: 'smooth' }),
}, {
  name: 'Grow my business',
  action: () => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }),
}, {
  name: 'Contact',
  action: () => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }),
}];
