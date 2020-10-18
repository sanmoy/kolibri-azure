from sqlalchemy import create_engine
from sqlalchemy.pool import NullPool

from kolibri.core.content.utils.sqlalchemybridge import get_default_db_string
from kolibri.core.content.utils.sqlalchemybridge import SharingPool


def django_connection_engine():
    if get_default_db_string().startswith("sqlite"):
        return create_engine(
            get_default_db_string(), poolclass=SharingPool, convert_unicode=True
        )
    return create_engine(
        get_default_db_string(), poolclass=NullPool, convert_unicode=True
    )
