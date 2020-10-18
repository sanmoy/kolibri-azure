import json
import pkgutil
from collections import namedtuple
from gettext import gettext as _

""" License Constants """

# IMPORTANT: Keep these constants in sync with licenselookup.json

CC_BY = "CC BY"
CC_BY_SA = "CC BY-SA"
CC_BY_ND = "CC BY-ND"
CC_BY_NC = "CC BY-NC"
CC_BY_NC_SA = "CC BY-NC-SA"
CC_BY_NC_ND = "CC BY-NC-ND"
ALL_RIGHTS_RESERVED = "All Rights Reserved"
PUBLIC_DOMAIN = "Public Domain"
SPECIAL_PERMISSIONS = "Special Permissions"

choices = (
    (CC_BY, _("CC BY")),
    (CC_BY_SA, _("CC BY-SA")),
    (CC_BY_ND, _("CC BY-ND")),
    (CC_BY_NC, _("CC BY-NC")),
    (CC_BY_NC_SA, _("CC BY-NC-SA")),
    (CC_BY_NC_ND, _("CC BY-NC-ND")),
    (ALL_RIGHTS_RESERVED, _("All Rights Reserved")),
    (PUBLIC_DOMAIN, _("Public Domain")),
    (SPECIAL_PERMISSIONS, _("Special Permissions")),
)

class License(
        namedtuple("License", [
            "id", "name", "exists", "url", "description", "custom", "copyright_holder_required"
        ])):
    pass

def generate_list(constantlist):
    for id, lang in constantlist.items():
        yield License(id=int(id), **lang)

def _initialize_license_list():
    constantlist = json.loads(pkgutil.get_data('le_utils', 'resources/licenselookup.json').decode('utf-8'))

    return generate_list(constantlist)

LICENSELIST = list(_initialize_license_list())
